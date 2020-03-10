<script>
  import nanoid from "nanoid-esm";
  import { getWidgets, setWidgets } from "../helpers.js";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let sourceItems = [];
  let equations = [];

  let isModalOpen = false;
  // TODO refactor
  const widgetType = "equation";
  const defaultContent = {
    title: "",
    sources: [],
    equations: []
  };
  let content = { ...defaultContent };

  function updateModal(value) {
    isModalOpen = value;
  }
  function reset() {
    content = { ...defaultContent };
  }
  function getContent() {
    return {
      ...content,
      sources: [...sourceItems],
      equations: [...equations]
    };
  }
  function saveItem() {
    const items = getWidgets();
    const newItem = {
      type: widgetType,
      id: nanoid(8),
      content: getContent()
    };
    let newItems = [newItem, ...items];
    setWidgets(newItems);
    reset();
    updateModal(false);
    dispatch("add");
  }

  function addSource() {
    sourceItems = [
      ...sourceItems,
      {
        id: nanoid(8),
        title: "",
        name: `x${sourceItems.length + 1}` // x1, x2, ...
      }
    ];
  }
  function addFormula() {
    equations = [
      ...equations,
      {
        id: nanoid(8),
        title: "",
        formula: "" // x1 + x2
      }
    ];
  }
</script>

<div class="control">
  <button class="button is-primary is-small" on:click={() => updateModal(true)}>
    Add Equation Widget
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
        <label class="label">Widget Title</label>
        <div class="control">
          <input
            bind:value={content.title}
            class="input"
            type="text"
            placeholder="e.g. BMI" />
        </div>
      </div>

      <div class="d-flex mb-md">
        <button class="button is-primary is-small mr-xs" on:click={addSource}>
          Add Source Variable
        </button>
        <button class="button is-primary is-small" on:click={addFormula}>
          Add Formula
        </button>
      </div>

      <!-- source items -->
      {#each sourceItems as item}
        <div class="field">
          <label class="label">
            Variable Title
            <sup>(use in equation as {item.name})</sup>
          </label>
          <div class="control">
            <input
              bind:value={item.title}
              class="input"
              type="text"
              placeholder="e.g. My Weight" />
          </div>
        </div>
      {/each}

      {#each equations as item}
        <div class="field">
          <label class="label">Equation Title</label>
          <div class="control">
            <input
              bind:value={item.title}
              class="input"
              type="text"
              placeholder="e.g. My BMI" />
          </div>
        </div>
        <div class="field">
          <label class="label">Math Formula</label>
          <div class="control">
            <input
              bind:value={item.formula}
              class="input"
              type="text"
              placeholder="e.g. x1 / x2 ^ 2" />
          </div>
          <a
            href="https://github.com/silentmatt/expr-eval/tree/master"
            target="_blank">
            How to write math functions?
          </a>
        </div>
      {/each}

    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" on:click={saveItem}>
        Save changes
      </button>
    </footer>
  </div>

</div>
