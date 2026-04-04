from pathlib import PurePath
from htmltools import HTMLDependency, Tag
from shiny import ui
from shiny.module import resolve_id

input_time_deps = HTMLDependency(
    "shinytime",
    "1.0.0",
    source={"package": "shinytime", "subdir": str(PurePath(__file__).parent / "distjs")},
    script={"src": "index.js", "type": "module"},
)

def input_time(id: str, label: str = "Time", value: str = "12:00:00"):
    return ui.div(
        ui.HTML(label),
        Tag("time-picker", input_time_deps, id=resolve_id(id), **{"initial-value": value}),
    )
