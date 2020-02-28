<script>
  let isModalOpen = false;
  function openModal(value) {
    isModalOpen = value;
  }
</script>

<div class="control">
  <button class="button is-link" on:click={() => openModal(true)}>
    Add Widget
  </button>
</div>

<div id="modal" class="modal" class:is-active={isModalOpen}>
  <div class="modal-background" on:click={() => openModal(false)} />

  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Widget info</p>
      <button class="delete" aria-label="close" on:click={() => openModal(false)} />
    </header>
    <section class="modal-card-body">

      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="e.g. Shoot the atomic bomb" />
        </div>
        <label class="label">Request URL</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="e.g. https://api.example.com/bombs" />
        </div>
        <label class="label">Request Config</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder={'e.g. {"method": "POST", "data": {password: "p@ssw0rd"}}'} />
        </div>
      </div>

    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Save changes</button>
      <button class="button" on:click={() => openModal(false)}>Cancel</button>
    </footer>
  </div>

</div>
