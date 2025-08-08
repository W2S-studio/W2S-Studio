<template>
    <div class="project-card sleek-card-light rounded-2xl overflow-hidden hover-scale transition-all">
        <!-- Project Image -->
        <div
            class="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
            <div class="text-6xl font-black text-gray-400">
                <img :src="project.imageLink"
                    alt="" srcset="">
            </div>
        </div>

        <!-- Main Content -->
        <div class="project-main-content p-6">
            <h3 class="text-xl font-bold text-black mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 text-sm mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-3">
                <span v-for="tag in project.tags" :key="tag"
                    class="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded font-medium">
                    {{ tag }}
                </span>
            </div>
        </div>

        <!-- Overlay Content -->
        <div class="project-overlay">
            <h4 class="text-xl font-bold mb-4">{{ project.overlayTitle }}</h4>
            <p class="text-sm mb-4 opacity-90">{{ project.overlayDescription }}</p>

            <div class="project-stats mb-4">
                <div v-for="stat in project.stats" :key="stat.text" class="project-stat">
                    <svg class="project-stat-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path :d="stat.iconPath" :fill-rule="stat.fillRule" :clip-rule="stat.clipRule"></path>
                    </svg>
                    <span class="text-sm">{{ stat.text }}</span>
                </div>
            </div>

            <div class="flex flex-wrap gap-1 mb-4">
                <span v-for="tech in project.overlayTech" :key="tech" class="project-tech-tag">{{ tech }}</span>
            </div>

            <a :href="project.buttonLink"
                class="bg-white text-black px-4 py-2 rounded font-medium text-sm hover:bg-gray-100 transition-colors inline-block">
                {{ project.buttonText }}
            </a>
        </div>
    </div>
</template>

<script setup>
defineProps({
    project: {
        type: Object,
        required: true,
    },
});
</script>

<style scoped>
.sleek-card-light {
    background: rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.sleek-card-light:hover {
    background: rgba(0, 0, 0, 0.08);
    border-color: rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
}

.project-card {
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

.project-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7), transparent);
    transform: translateY(100%);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 2rem;
    color: white;
}

.project-card:hover .project-overlay {
    transform: translateY(0);
}

.project-card:hover .project-main-content {
    transform: translateY(-20px);
    opacity: 0.3;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-main-content {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-tech-tag {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    font-size: 0.75rem;
    border-radius: 1rem;
    margin: 0.125rem;
    font-weight: 500;
}

.project-stat {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
}

.project-stat-icon {
    width: 16px;
    height: 16px;
    margin-right: 0.5rem;
    opacity: 0.8;
}

.hover-scale:hover {
    transform: scale(1.05);
}
</style>