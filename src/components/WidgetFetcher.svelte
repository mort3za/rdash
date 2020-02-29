<script>
  export let content;
  let promise;
  init();

  function init() {
    promise = run(content);
  }

  async function run({ url, config, responseType }) {
    const defaultConfig = {
      method: "GET"
    };

    let parsedConfig;
    try {
      parsedConfig = JSON.parse(config);
    } catch (error) {
      parsedConfig = defaultConfig;
    }

    const res = await fetch(url, parsedConfig);
    const text = await res[responseType]();

    if (res.ok) {
      return text;
    } else {
      return "failed to load";
    }
  }

  async function responseConvertor(value) {
    window.value = value;
    return await value;
  }
</script>

<style>
  .widget--content {
    cursor: pointer;
  }
</style>

<div class="widget--content" on:click={init}>
  {#await promise}
    loading...
  {:then value}
    <div class="is-flex align-center">
      <span class="m-r-sm">{value}</span>
      <ion-icon class="has-text-info" size="small" src="icons/reload-circle-sharp.svg" />
    </div>
  {/await}
</div>
