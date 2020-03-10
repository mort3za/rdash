<script>
  import AddItem from "./AddItem.svelte";
  import AddEquation from "./AddEquation.svelte";
  import WidgetFetcher from "../components/WidgetFetcher.svelte";
  import WidgetEquation from "../components/WidgetEquation.svelte";
  import { getWidgets, removeWidget } from "../helpers.js";

  let isEditModeActive = false;
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
</style>

<div class="mx-sm">
  <div class="toolbar is-flex justify-space-between py-sm">
    <div class="mr-xs">
      <AddItem on:add={update} />
    </div>
    <div>
      <AddEquation on:add={update} />
    </div>
    {#if widgets.length > 0}
      <button
        class="button is-link is-small ml-xs"
        on:click={() => {
          isEditModeActive = !isEditModeActive;
        }}>
        Edit Widgets
      </button>
    {/if}
  </div>

  {#each widgets as widget (widget.id)}
    <div class="card">
      <div class="card-content p-md">
        {#if widget.type === 'fetcher'}
          <WidgetFetcher content={widget.content} />
        {/if}
        {#if widget.type === 'equation'}
          <WidgetEquation content={widget.content} />
        {/if}
        {#if isEditModeActive}
          <button
            class="delete widget--delete"
            aria-label="close"
            on:click={() => remove(widget.id)} />
        {/if}
      </div>
    </div>
  {/each}
</div>
