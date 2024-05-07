<template>
    <div class="notes">
        <div
          class="card mb-4"
          v-for="i in 3"
        >
            <div class="card-content">
                <div class="content">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, totam libero facilis cupiditate voluptatem quis vel sit fuga voluptatibus est deserunt voluptates. Assumenda perspiciatis atque, corrupti recusandae beatae adipisci aliquam!
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a>
            </footer>
        </div>
    </div>
</template>

<style>
    .card-footer {
        width: 100% !important;
    }
</style>