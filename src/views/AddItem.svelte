<script>
  import nanoid from "nanoid-esm";
  import { getWidgets, setWidgets } from "../helpers.js";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let isModalOpen = false;
  // TODO refactor
  const widgetType = "fetcher";
  const defaultContent = {
    responseType: "text",
    title: "",
    url: "",
    config: ""
  };
  let content = { ...defaultContent };

  function updateModal(value) {
    isModalOpen = value;
  }
  function reset() {
    content = { ...defaultContent };
  }
  function saveItem() {
    const items = getWidgets();
    const newItem = {
      type: widgetType,
      id: nanoid(8),
      content
    };
    let newItems = [newItem, ...items];
    setWidgets(newItems);
    reset();
    updateModal(false);
    dispatch("add");
  }
</script>

<div class="control">
  <button class="button is-link" on:click={() => updateModal(true)}>
    Add Widget
  </button>
</div>

<div id="modal" class="modal" class:is-active={isModalOpen}>
  <div class="modal-background" on:click={() => updateModal(false)} />

  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Widget info</p>
      <button
        class="delete"
        aria-label="close"
        on:click={() => updateModal(false)} />
    </header>
    <section class="modal-card-body">

      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input
            bind:value={content.title}
            class="input"
            type="text"
            placeholder="e.g. Shoot the atomic bomb" />
        </div>
        <label class="label">Request URL</label>
        <div class="control">
          <input
            bind:value={content.url}
            class="input"
            type="text"
            placeholder="e.g. https://api.example.com/bombs" />
        </div>
        <label class="label">Request Config</label>
        <div class="control">
          <input
            bind:value={content.config}
            class="input"
            type="text"
            placeholder={'e.g. {"method": "POST", "data": {password: "p@ssw0rd"}}'} />
        </div>
      </div>

    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" on:click={saveItem}>
        Save changes
      </button>
      <button class="button" on:click={() => updateModal(false)}>Cancel</button>
    </footer>
  </div>

</div>
