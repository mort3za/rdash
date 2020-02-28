export function getWidgets() {
  let widgets = localStorage.getItem("widgets");
  widgets = JSON.parse(widgets) || [];
  return widgets;
}

export function setWidgets(items) {
  localStorage.setItem("widgets", JSON.stringify(items));
}
