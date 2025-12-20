<template>
  <svg :viewBox="viewBox" v-bind="attrs">
    <path class="fill-current" :d="path" />
  </svg>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { Ref } from 'vue';
import { getSymbol } from '@hyrioo/vite-plugin-material-symbols-svg/consumer';
import type { IconKey, Theme, Fill, Weight } from '@hyrioo/vite-plugin-material-symbols-svg/consumer';

export interface CIconProps {
  icon: IconKey;
  weight?: Weight;
  theme?: Theme;
  fill?: Fill;
  width?: number;
  height?: number;
  size?: number; // rendered size; used to decide optical size bucket
}

const props = withDefaults(defineProps<CIconProps>(), {
  width: undefined,
  height: undefined,
  size: 24,
  theme: 'rounded',
  fill: false,
  weight: 200,
});

const path: Ref<string> = ref('');
const viewBox: Ref<string> = ref('0 0 24 24');

const attrs = computed(() => ({
  width: props.width ?? props.size,
  height: props.height ?? props.size,
}));

function opticalSizeFor(rendered: number): 20 | 24 | 40 | 48 {
  return rendered < 22 ? 20 : rendered < 32 ? 24 : rendered < 44 ? 40 : 48;
}

function updateIcon() {
  const rendered = props.size ?? 24;
  const size = opticalSizeFor(rendered);
  const svg = getSymbol({
    icon: String(props.icon),
    theme: props.theme ?? 'rounded',
    fill: props.fill ? 1 : 0,
    weight: Number(props.weight ?? 200),
    size: Number(size),
  });
  if (svg) {
    path.value = svg.d;
    viewBox.value = svg.viewBox;
  } else {
    const IS_DEV = (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production') || 
                   (typeof (import.meta as any).env !== 'undefined' && (import.meta as any).env.DEV);
    if (IS_DEV) {
      // eslint-disable-next-line no-console
      console.warn(`[CIcon] Icon not found: ${String(props.icon)} (size ${size})`);
    }
  }
}

watch(
  () => [props.icon, props.theme, props.fill, props.weight, props.size],
  () => updateIcon(),
);

updateIcon();
</script>
