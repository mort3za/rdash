<script>
  import nanoid from "nanoid-esm";
  import { getWidgets, setWidgets } from "../helpers.js";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let isModalOpen = false;
  // TODO refactor
  const widgetType = "fetcher";
  const defaultContent = {
    responseFormat: "text",
    jsonPath: "",
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
  <button class="button is-primary is-small" on:click={() => updateModal(true)}>
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
        <label class="label">
          Request Config
          <small>(Optional)</small>
        </label>
        <div class="control">
          <input
            bind:value={content.config}
            class="input"
            type="text"
            placeholder={'e.g. {"method": "POST", "data": {password: "p@ssw0rd"}}'} />
        </div>
      </div>

      <div class="field">
        <label class="label">Response Format</label>
        <div class="control">
          <label class="radio mr-sm">
            <input
              value={'text'}
              bind:group={content.responseFormat}
              type="radio"
              name="responseFormat" />
            Text
          </label>
          <label class="radio">
            <input
              value={'json'}
              bind:group={content.responseFormat}
              type="radio"
              name="responseFormat" />
            JSON
          </label>
        </div>

        {#if content.responseFormat === 'json'}
          <div class="control">
            <label class="label">
              JSON Path
              <small>(Optional)</small>
            </label>
            <div class="control">
              <input
                bind:value={content.jsonPath}
                class="input"
                type="text"
                placeholder={'e.g. collections[0].products[2].price'} />
            </div>
          </div>
        {/if}

        <label class="checkbox">
          <input type="checkbox" bind:value={content.useProxy} />
          Use CORS Proxy (Enable if your request does not work)
        </label>
      </div>

    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" on:click={saveItem}>
        Save changes
      </button>
    </footer>
  </div>

</div>
