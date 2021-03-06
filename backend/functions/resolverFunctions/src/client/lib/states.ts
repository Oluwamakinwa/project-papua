import { Option } from './types'

const initialStates = [
  { name: 'Alabama', id: 'al' },
  { name: 'Alaska', id: 'ak' },
  { name: 'American Samoa', id: 'as' },
  { name: 'Arizona', id: 'az' },
  { name: 'Arkansas', id: 'ar' },
  { name: 'California', id: 'ca' },
  { name: 'Colorado', id: 'co' },
  { name: 'Connecticut', id: 'ct' },
  { name: 'Delaware', id: 'de' },
  { name: 'District Of Columbia', id: 'dc' },
  { name: 'Federated States Of Micronesia', id: 'fm' },
  { name: 'Florida', id: 'fl' },
  { name: 'Georgia', id: 'ga' },
  { name: 'Guam', id: 'gu' },
  { name: 'Hawaii', id: 'hi' },
  { name: 'Idaho', id: 'id' },
  { name: 'Illinois', id: 'il' },
  { name: 'Indiana', id: 'in' },
  { name: 'Iowa', id: 'ia' },
  { name: 'Kansas', id: 'ks' },
  { name: 'Kentucky', id: 'ky' },
  { name: 'Louisiana', id: 'la' },
  { name: 'Maine', id: 'me' },
  { name: 'Marshall Islands', id: 'mh' },
  { name: 'Maryland', id: 'md' },
  { name: 'Massachusetts', id: 'ma' },
  { name: 'Michigan', id: 'mi' },
  { name: 'Minnesota', id: 'mn' },
  { name: 'Mississippi', id: 'ms' },
  { name: 'Missouri', id: 'mo' },
  { name: 'Montana', id: 'mt' },
  { name: 'Nebraska', id: 'ne' },
  { name: 'Nevada', id: 'nv' },
  { name: 'New Hampshire', id: 'nh' },
  { name: 'New Jersey', id: 'nj' },
  { name: 'New Mexico', id: 'nm' },
  { name: 'New York', id: 'ny' },
  { name: 'North Carolina', id: 'nc' },
  { name: 'North Dakota', id: 'nd' },
  { name: 'Northern Mariana Islands', id: 'mp' },
  { name: 'Ohio', id: 'oh' },
  { name: 'Oklahoma', id: 'ok' },
  { name: 'Oregon', id: 'or' },
  { name: 'Palau', id: 'pw' },
  { name: 'Pennsylvania', id: 'pa' },
  { name: 'Puerto Rico', id: 'pr' },
  { name: 'Rhode Island', id: 'ri' },
  { name: 'South Carolina', id: 'sc' },
  { name: 'South Dakota', id: 'sd' },
  { name: 'Tennessee', id: 'tn' },
  { name: 'Texas', id: 'tx' },
  { name: 'Utah', id: 'ut' },
  { name: 'Vermont', id: 'vt' },
  { name: 'Virgin Islands', id: 'vi' },
  { name: 'Virginia', id: 'va' },
  { name: 'Washington', id: 'wa' },
  { name: 'West Virginia', id: 'wv' },
  { name: 'Wisconsin', id: 'wi' },
  { name: 'Wyoming', id: 'wy' },
]

export const states: Option[] = initialStates.map((state) => ({
  name: {
    en: state.name,
    es: state.name,
    zh: state.name,
  },
  id: state.id,
}))
