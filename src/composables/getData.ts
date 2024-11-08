import { ref } from 'vue';

import type { Publication } from '@/domain/Publication';

const useGetData = <T>(dataType: 'publications') => () => {
    const data = ref<T[]>([]);

    const getData = async () => {
        const response = await fetch(`/data/${dataType}.json?t=${Date.now()}`);
        data.value = await response.json();
    };

    return { data, getData };
};

export const useGetPublicationsData = useGetData<Publication>('publications');
