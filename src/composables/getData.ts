import { ref } from 'vue';

import type { Lecture } from '@/domain/Lecture';
import type { Project } from '@/domain/Project';
import type { Publication } from '@/domain/Publication';

const useGetData = <T>(dataType: 'lectures' | 'projects' | 'publications') => () => {
    const data = ref<T[]>([]);

    const getData = async () => {
        try {
            const response = await fetch(`/data/${dataType}.json?t=${Date.now()}`);
            data.value = await response.json();
        } catch {
            data.value = [];
        }
    };

    return { data, getData };
};

export const useGetLecturesData = useGetData<Lecture>('lectures');
export const useGetProjectsData = useGetData<Project>('projects');
export const useGetPublicationsData = useGetData<Publication>('publications');
