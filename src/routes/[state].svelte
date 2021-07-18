<script context="module">
    import stateNames from "../data/stateNames";
    import request from "../data/request"
    export async function preload(page){
        const state = page.params['state'];
        if(stateNames.find(s => s.abbreviation === state)===undefined){
            this.error(404,'State Not Found');
            return;
        }
        try{
            const stats = await request.stateStats(state);
            return {state,stats };
        }catch(e){
            return this.error(500 ,"there was an error in calling api , please try again in 5 minutes.");
        }
    }
</script>
<script> 
    import CovidState from "../components/CovidState.svelte";
    import CovidChart from "../components/CovidChart.svelte";
    import TableContainer from "../components/TableContainer.svelte";
    import Error from "./_error.svelte";
    import Index from "./index.svelte";
    export let state;
    export let stats;
</script>
<svelte:head>
    <title>
        Covid 19 - {state}
    </title>
</svelte:head>
<div class="section header">
    <div class="container">
        <h1>
            Covid 19 - {state}
        </h1>
    </div>
</div>

<!-- svelte-ignore missing-declaration -->
<CovidState {...stats}/> 
<CovidChart />