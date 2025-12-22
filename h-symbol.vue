<template>
    <svg :viewBox="viewBox" v-bind="attrs" v-html="content" />
</template>

<script lang="ts" setup>
import type { Ref } from 'vue';
import { computed, ref, watch } from 'vue';
import type { OpticalSize, Filled, IconKey, Theme, Weight } from '@hyrioo/vite-plugin-material-symbols-svg/consumer';
import { getSymbol } from '@hyrioo/vite-plugin-material-symbols-svg/consumer';
import { symbolDefaultProps } from './index';

export interface HSymbolProps {
    icon: IconKey;
    weight?: Weight;
    theme?: Theme;
    filled?: Filled;
    size?: number; // rendered size; used to decide the optical size bucket
    opticalSize?: OpticalSize | null;
}

const props = withDefaults(defineProps<HSymbolProps>(), {
    weight: () => symbolDefaultProps.weight,
    theme: () => symbolDefaultProps.theme,
    filled: () => symbolDefaultProps.filled,
    size: 24,
    opticalSize: null,
});

const content: Ref<string> = ref('');
const viewBox: Ref<string> = ref('0 0 24 24');

const attrs = computed(() => ({
    width: props.size,
    height: props.size,
}));

function updateIcon() {
    const available = getSymbol({
        icon: String(props.icon),
        theme: props.theme,
        filled: props.filled ? 1 : 0,
        weight: Number(props.weight),
    });

    if (available) {
        const targetSize = props.opticalSize || props.size;
        const sizes = Object.keys(available).map(Number).sort((a, b) => a - b);

        let bestSize = targetSize;
        if (!(available as any)[targetSize] && sizes.length > 0) {
            bestSize = sizes.reduce((prev, curr) => {
                return Math.abs(curr - targetSize) < Math.abs(prev - targetSize) ? curr : prev;
            });
        }

        const svg = (available as any)[bestSize];
        if (svg) {
            content.value = svg.content;
            viewBox.value = svg.viewBox;
            return;
        }
    }

    content.value = '';

    if (symbolDefaultProps.debug) {
        // eslint-disable-next-line no-console
        console.warn(`[h-symbol] Icon not found: ${String(props.icon)} (size ${props.size})`);
    }
}

watch(
    () => [props.icon, props.theme, props.filled, props.weight, props.size],
    () => updateIcon(),
);

updateIcon();
</script>
