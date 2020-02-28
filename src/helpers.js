export function getWidgets() {
  let widgets = localStorage.getItem("widgets");
  widgets = JSON.parse(widgets) || [];
  return widgets;
}

export function setWidgets(items) {
  localStorage.setItem("widgets", JSON.stringify(items));
}

export function removeWidget(widgetId) {
  const items = getWidgets();
  const newItems = items.filter(item => item.id !== widgetId);
  setWidgets(newItems);
}
