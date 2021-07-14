<script>
    export let segment;
    let isOpen = false;
    function toggleNav(){
        isOpen =! isOpen;       
    }
</script>

<style>
    @import "../static/extra.css";
    @import "../static/global.css";
</style>
<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a href="/" class="navbar-item" >
            <img src="logo.jpg" alt="virus">
        </a>
        <span  class="navbar-burger" on:click={toggleNav} class:is-active={isOpen} aria-label="menu"  aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span> 
        </span>
    </div>
    <div class="navbar-menu" class:is-active={isOpen}>
        <div class="navbar-start">
            <a href="/" class="navbar-item" class:is-active={segment===undefined}>Home</a>
            <a href="/about" class="navbar-item" class:is-active={segment==='about'}>About</a>
        </div>
    </div>
</nav>
