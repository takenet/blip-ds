import { getAssetUrl } from "../../utils/asset-loader";
// Country keys whose official flag artwork (blip-tokens) is published under another name.
const FLAG_ALIASES = {
    'marshall-islands': 'marshall-island',
    'northern-mariana-islands': 'northern-marianas-islands',
    'turks-and-caicos-islands': 'turks-and-caicos',
    'u.s.-virgin-islands': 'virgin-islands',
    kuwait: 'kwait',
    macau: 'macao',
    macedonia: 'republic-of-macedonia',
    malaysia: 'malasya',
    pitcairn: 'pitcairn-islands',
    'western-sahara': 'sahrawi-arab-democratic-republic',
    'saint-barthelemy': 'st-barts',
    'saint-lucia': 'st-lucia',
    'saint-vincent-and-the-grenadines': 'st-vincent-and-the-grenadines',
    'sao-tome-and-principe': 'sao-tome-and-prince',
    uzbekistan: 'uzbekistn',
    vatican: 'vatican-city',
};
/** Official flag URL for a country key such as "brazil-flag", or null when there is no published artwork. */
export function flagUrl(country) {
    const base = country.replace(/-flag$/, '');
    try {
        return getAssetUrl(`asset-icon-${FLAG_ALIASES[base] || base}-flag-solid`);
    }
    catch (_a) {
        return null;
    }
}
