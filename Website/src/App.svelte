<script>
  import { Router, Link, Route } from "svelte-routing";
  import ChaptersList from "./components/ChaptersList.svelte";
  import SingleChapter from "./components/SingleChapter.svelte";
</script>

<Router>
  <div class="max-w-screen-2xl mx-auto space-y-8 px-6 py-12">
    <nav class="flex flex-row justify-center space-x-8">
      <Link to="/">Home</Link>
    </nav>

    <!-- components will be rendered in this div -->
    <div>
      <Route path="/" component={ChaptersList} />

      <Route path="/:chapter" let:params>
        <SingleChapter chapter={params.chapter} />
      </Route>
    </div>
  </div>
</Router>
