from datetime import datetime
from shiny import App, reactive, render, ui
from shinytime import input_time

app_ui = ui.page_fluid(
    input_time("my_time", "Select Time", datetime.now().strftime("%H:%M:%S"), seconds=False, minute_step=2),
    ui.input_action_button("go", "Go"),
    ui.output_ui("output_time"),
)

def server(input, output, session):
    current_time = reactive.Value(None)

    @render.ui
    def output_time():
        time_str = current_time()
        return ui.p(f"Selected: {time_str}" if time_str is not None else "")

    @reactive.effect
    @reactive.event(input.go)
    def _():
        time_str = input.my_time()
        current_time.set(time_str)

app = App(app_ui, server)
