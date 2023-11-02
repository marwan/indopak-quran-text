<script>
  import { Link } from "svelte-routing";
  import { quranMetaData } from "../lib/quranMeta";
  import { currentPage } from "../lib/stores";

  currentPage.set("home");
</script>

<svelte:head>
  <title>QuranWBW.com</title>
</svelte:head>

<div class=" flex flex-col space-y-8">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-md text-left">
    {#each { length: 114 } as _, i}
      <Link to="/{i + 1}" class="px-2 border border-gray-200 hover:border-gray-600">{i + 1}. {quranMetaData[i + 1].transliteration}</Link>
    {/each}
  </div>
</div>
