import { ref } from 'vue';

import type { Lecture } from '@/domain/Lecture';
import type { Publication } from '@/domain/Publication';

const useGetData = <T>(dataType: 'lectures' | 'publications') => () => {
    const data = ref<T[]>([]);

    const getData = async () => {
        const response = await fetch(`/data/${dataType}.json?t=${Date.now()}`);
        data.value = await response.json();
    };

    return { data, getData };
};

export const useGetLecturesData = useGetData<Lecture>('lectures');
export const useGetPublicationsData = useGetData<Publication>('publications');
