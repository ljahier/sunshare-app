<template lang="html">
    <div class="">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <a class="navbar-brand" href="#"><img style="margin-top: -9px; width:130px; height: 45px;" src="./sunshare_long_transp.png"/></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/Global">Global</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/Personnel">Personnel</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/setting">Paramètre</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/help">A Propos</router-link>
                    </li>
                </ul>
                <div class="dropdown">
                   <h3><span class="badge badge-danger">54,76   SP</span></h3>
                </div>
            </div>
        </nav>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style lang="css" scoped>
    @media screen and (min-width: 780px) {
        #navbarCollapse{
            margin-left: -13px;
        }
    }

</style>
