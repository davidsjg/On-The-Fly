import mayflyDry from './mayfly dry.jpeg';
import caddisDry from './caddis dry.webp';
import midgeDry from './midge dry.jpeg';
import stoneflyDry from './stonefly dry.jpeg'
import mayflySpinner from './mayfly spinner.jpeg'
import caddisCased from './caddis cased.jpeg'
import caddisFree from './caddis free-form.jpeg'
import caddisEmerger from './caddis emerger.jpeg'
import mayflyEmerger from './mayfly emerger.jpeg'
import midgeEmerger from './midge emerger.jpeg'
import midgeNymph from './midge nymph.jpeg'
import stoneflyNymph from './stonefly nymph.jpeg'
import dragonflyNymph from './Dragonfly Nymph.webp'
import sowbugNymph from './sowbug.webp'

const flies = [
    {
    "id": '001',
    "name": 'Caddis Dry',
    "above": true,
    "legs": null,
    "legsJointed": null,
    "tail": null,
    "antennae": null,
    "wingsOut": null,
    "wingsDesc": 'tented',
    "imitates": null,
    "image": caddisDry,
    "size": null,
    "category": 'Caddis'
    },
    {
    "id": '002',
    "name": 'Mayfly Dry',
    "above": true,
    "legs": null,
    "legsJointed": null,
    "tail": null,
    "antennae": null,
    "wingsOut": null,
    "wingsDesc": 'upright',
    "imitates": null,
    "image": mayflyDry,
    "size": null,
    "category": 'Mayfly'
    },
    {
    "id": '003',
    "name": 'Midge Dry',
    "above": true,
    "legs": null,
    "legsJointed": null,
    "tail": null,
    "antennae": null,
    "wingsOut": null,
    "wingsDesc": 'tented',
    "imitates": null,
    "image": midgeDry,
    "size": null,
    "category": 'Midge'
    },
    {
    "id": '004',
    "name": 'Stonefly Dry',
    "above": true,
    "legs": null,
    "legsJointed": null,
    "tail": null,
    "antennae": null,
    "wingsOut": null,
    "wingsDesc": 'flat',
    "imitates": null,
    "image": stoneflyDry,
    "size": null,
    "category": 'Stonefly'
    },
    {
    "id": '005',
    "name": 'Mayfly Spinner',
    "above": true,
    "legs": null,
    "legsJointed": null,
    "tail": null,
    "antennae": null,
    "wingsOut": true,
    "wingsDesc": null,
    "imitates": null,
    "image": mayflySpinner,
    "size": null,
    "category": 'Mayfly'
    },
    {
    "id": '006',
    "name": 'Caddis Cased',
    "above": false,
    "legs": true,
    "legsJointed": false,
    "tail": null,
    "antennae": null,
    "wingsOut": true,
    "wingsDesc": null,
    "imitates": null,
    "image": caddisCased,
    "size": null,
    "category": 'Caddis'
    },
    {
    "id": '007',
    "name": 'Caddis Freeform',
    "above": false,
    "legs": true,
    "legsJointed": false,
    "tail": null,
    "antennae": null,
    "wingsOut": null,
    "wingsDesc": null,
    "imitates": null,
    "image": caddisFree,
    "size": null,
    "category": 'Caddis'
    },
    {
    "id": '008',
    "name": 'Caddis Emerger',
    "above": false,
    "legs": true,
    "legsJointed": false,
    "tail": null,
    "antennae": true,
    "wingsOut": null,
    "wingsDesc": null,
    "imitates": null,
    "image": caddisEmerger,
    "size": null,
    "category": 'Caddis'
    },
    {
    "id": '009',
    "name": 'Mayfly Emerger',
    "above": false,
    "legs": true,
    "legsJointed": true,
    "tail": true,
    "antennae": true,
    "wingsOut": null,
    "wingsDesc": null,
    "imitates": null,
    "image": mayflyEmerger,
    "size": null,
    "category": 'Mayfly'
    },
    {
    "id": '010',
    "name": 'Midge Emerger',
    "above": false,
    "legs": false,
    "legsJointed": false,
    "tail": null,
    "antennae": null,
    "wingsOut": null,
    "wingsDesc": null,
    "imitates": null,
    "image": midgeEmerger,
    "size": null,
    "category": 'Midge'
    },
    {
    "id": '011',
    "name": 'Midge Nymph',
    "above": false,
    "legs": false,
    "legsJointed": false,
    "tail": null,
    "antennae": null,
    "wingsOut": null,
    "wingsDesc": null,
    "imitates": null,
    "image": midgeNymph,
    "size": null,
    "category": 'Midge'
    },
    {
    "id": '012',
    "name": 'Stonefly Nymph',
    "above": false,
    "legs": true,
    "legsJointed": true,
    "tail": true,
    "antennae": true,
    "wingsOut": null,
    "wingsDesc": null,
    "imitates": null,
    "image": stoneflyNymph,
    "size": null,
    "category": 'Midge'
    },
    {
    "id": '013',
    "name": 'Dragonfly Nymph',
    "above": false,
    "legs": true,
    "legsJointed": true,
    "tail": true,
    "antennae": true,
    "wingsOut": null,
    "wingsDesc": null,
    "imitates": null,
    "image": dragonflyNymph,
    "size": null,
    "category": 'Midge'
    },
    {
    "id": '014',
    "name": 'Sowbug',
    "above": false,
    "legs": true,
    "legsJointed": false,
    "tail": true,
    "antennae": null,
    "wingsOut": null,
    "wingsDesc": null,
    "imitates": null,
    "image": sowbugNymph,
    "size": null,
    "category": 'Midge'
    }
]

export default flies;