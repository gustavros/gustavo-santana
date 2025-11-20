'use client';

import { useCallback, useRef } from 'react';

type SoundType = 'hover' | 'click' | 'toggle';

interface UseSoundOptions {
  volume?: number;
  enabled?: boolean;
}

const DEFAULT_VOLUME = 0.05; // Muito sutil, quase imperceptível
const SOUND_FREQUENCIES = {
  hover: 300, // Hz - tom baixo e suave
  click: 400, // Hz - tom um pouco mais alto
  toggle: 250, // Hz - tom mais baixo
};

export function useSound(options: UseSoundOptions = {}) {
  const audioContextRef = useRef<AudioContext | null>(null);
  const { volume = DEFAULT_VOLUME, enabled = true } = options;

  const getAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
    }
    return audioContextRef.current;
  }, []);

  const playSound = useCallback(
    (type: SoundType = 'hover') => {
      if (!enabled) return;

      try {
        const audioContext = getAudioContext();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        // Configurar frequência baseada no tipo
        oscillator.frequency.value = SOUND_FREQUENCIES[type];
        oscillator.type = 'sine'; // Onda senoidal suave

        // Configurar volume muito baixo
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(
          volume,
          audioContext.currentTime + 0.01,
        );
        gainNode.gain.exponentialRampToValueAtTime(
          0.001,
          audioContext.currentTime + 0.1,
        );

        // Duração muito curta (100ms)
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
      } catch (error) {
        // Silenciosamente falhar se o áudio não estiver disponível
        console.debug('Audio context not available');
      }
    },
    [enabled, volume, getAudioContext],
  );

  return { playSound };
}
