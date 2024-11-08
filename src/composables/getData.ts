import { ref } from 'vue';

const useGetData = (dataType: 'publications') => () => {
    const data = ref([]);

    const getData = async () => {
        const response = await fetch(`/data/${dataType}.json?t=${Date.now()}`);
        data.value = await response.json();
    };

    return { data, getData };
};

export const useGetPublicationsData = useGetData('publications');
