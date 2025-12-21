<template>
    <svg :viewBox="viewBox" v-bind="attrs">
        <path :d="path" class="fill-current" />
    </svg>
</template>

<script lang="ts" setup>
import type { Ref } from 'vue';
import { computed, ref, watch } from 'vue';
import type { OpticalSize, Filled, IconKey, Theme, Weight } from '@hyrioo/vite-plugin-material-symbols-svg/consumer';
import { getSymbol } from '@hyrioo/vite-plugin-material-symbols-svg/consumer';
import { symbolDefaultConfig } from './index';

export interface HSymbolProps {
    icon: IconKey;
    weight?: Weight;
    theme?: Theme;
    filled?: Filled;
    size?: number; // rendered size; used to decide the optical size bucket
    opticalSize?: OpticalSize | null;
}

const props = withDefaults(defineProps<HSymbolProps>(), {
    weight: () => symbolDefaultConfig.weight,
    theme: () => symbolDefaultConfig.theme,
    filled: () => symbolDefaultConfig.filled,
    size: 24,
    opticalSize: null,
});

const path: Ref<string> = ref('');
const viewBox: Ref<string> = ref('0 0 24 24');

const attrs = computed(() => ({
    width: props.size,
    height: props.size,
}));

function opticalSizeFor(rendered: number): 20 | 24 | 40 | 48 {
    return rendered < 22 ? 20 : rendered < 32 ? 24 : rendered < 44 ? 40 : 48;
}

function updateIcon() {
    const rendered = props.size;
    const size = opticalSizeFor(rendered);
    const svg = getSymbol({
        icon: String(props.icon),
        theme: props.theme,
        filled: props.filled ? 1 : 0,
        weight: Number(props.weight),
        size: Number(size),
    });
    if (svg) {
        path.value = svg.d;
        viewBox.value = svg.viewBox;
    } else {
        path.value = '';

        if (symbolDefaultConfig.debug) {
            // eslint-disable-next-line no-console
            console.warn(`[h-symbol] Icon not found: ${String(props.icon)} (size ${size})`);
        }
    }
}

watch(
    () => [props.icon, props.theme, props.filled, props.weight, props.size],
    () => updateIcon(),
);

updateIcon();
</script>
