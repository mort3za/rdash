<script>
  export let content;
  const promise = run(content);

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
    console.log(value);
    window.value = value;
    return await value;
  }
</script>

<div class="card">
  <div class="card-content">

    <div class="content">
      {#await promise}loading...{:then value}{value}{/await}
    </div>
  </div>
</div>
