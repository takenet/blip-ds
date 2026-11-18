import { setTagTransformer as clientSetTagTransformer } from 'blip-ds/dist/components/index.js';
let tagTransformer;
export const setTagTransformer = (transformer) => {
    clientSetTagTransformer(transformer);
    tagTransformer = transformer;
};
export const transformTag = (tag) => {
    return tagTransformer ? tagTransformer(tag) : tag;
};
export const getTagTransformer = () => tagTransformer;
//# sourceMappingURL=tag-transformer.js.map