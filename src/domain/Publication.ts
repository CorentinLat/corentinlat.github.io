export type Publication = {
    title: string;
    authors: string;
    conference: string;
    year: string;
    other?: string;
    type?: 'article' | 'book' | 'journal' | 'thesis';
};
