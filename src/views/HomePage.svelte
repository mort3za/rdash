<script>
  import AddItem from "./AddItem.svelte";
  import WidgetFetcher from "../components/WidgetFetcher.svelte";
  import { getWidgets, removeWidget } from "../helpers.js";

  let widgets = [];
  update();

  function update() {
    widgets = getWidgets();
  }
  function remove(id) {
    const result = confirm("Deleting widget, Are you sure?");
    if (result) {
      removeWidget(id);
      update();
    }
  }
</script>

<style>
  .widget--delete {
    position: absolute;
    right: 2rem;
    top: 1.5rem;
  }
  .widget--title {
    font-size: 0.75rem;
    color: #aaaaac;
    font-weight: bold;
  }
</style>

<div>
  <div class="toolbar">
    <AddItem on:add={update} />
  </div>

  {#each widgets as widget}
    <div class="card">
      <div class="card-content">
        <span class="widget--title">{widget.content.title || 'Untitled'}</span>
        {#if widget.type === 'fetcher'}
          <WidgetFetcher content={widget.content} />
        {/if}
        <button
          class="delete widget--delete"
          aria-label="close"
          on:click={() => remove(widget.id)} />
      </div>
    </div>
  {/each}
</div>
