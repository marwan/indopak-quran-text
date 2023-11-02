<script>
  import Selectors from "./Selectors.svelte";
  import { currentPage, chapterNumber } from "../lib/stores";
  import { quranMetaData } from "../lib/quranMeta";

  // props from router
  export let chapter;

  let fetchData;

  // fetch verses whenever there's a change
  $: {
    // updating the reactive chapter number
    chapterNumber.set(chapter);

    fetchData = (async () => {
      const api_url = `https://api.quranwbw.com/v1/chapter?chapter=${$chapterNumber}&word_type=2`;
      const response = await fetch(api_url);
      const data = await response.json();
      return data.data.verses;
    })();
  }

  currentPage.set("chapter");
</script>

<svelte:head>
  <title>{quranMetaData[$chapterNumber].transliteration} - QuranWBW.com</title>
</svelte:head>

<div class="">
  <Selectors />

  {#await fetchData}
    <div class="flex items-center justify-center pt-28">loading...</div>
  {:then chapterData}
    <div>
      {#each Object.entries(chapterData) as [key, value]}
        <div id={key} class="flex flex-col py-3 border-b hover:bg-gray-100">
          <p class="arabic-font-2 text-4xl leading-normal py-3">{value.verse} {value.end}</p>
        </div>
      {/each}
    </div>
  {:catch error}
    <p>{error}</p>
  {/await}
</div>
