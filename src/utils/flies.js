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
import blackBeauty from './black beauty midge.jpeg'
import bloodMidge from './blood midge.jpeg'
import topSecret from './top secret midge.jpeg'
import electric from './electric caddis.jpeg'
import elkHair from './elk hair caddis.webp'
import kryptonite from './kryptonite caddis.jpeg'
import mercCaddis from './mercury cased caddis.jpeg'

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
    },
    {
    "id": '015',
    "name": 'Blood Midge',
    "above": false,
    "legs": false,
    "legsJointed": false,
    "tail": false,
    "antennae": null,
    "wingsOut": null,
    "wingsDesc": null,
    "imitates": 'Midge Nymph',
    "image": bloodMidge,
    "size": '18-22',
    "category": 'Midge'
    },
    {
    "id": '016',
    "name": 'Black Beauty Midge',
    "above": false,
    "legs": false,
    "legsJointed": false,
    "tail": false,
    "antennae": null,
    "wingsOut": null,
    "wingsDesc": null,
    "imitates": 'Midge Nymph',
    "image": blackBeauty,
    "size": '18-22',
    "category": 'Midge'
    },
    {
    "id": '017',
    "name": 'Top Secret Midge',
    "above": false,
    "legs": false,
    "legsJointed": false,
    "tail": false,
    "antennae": null,
    "wingsOut": null,
    "wingsDesc": null,
    "imitates": 'Midge Emerger',
    "image": topSecret,
    "size": '18-22',
    "category": 'Midge'
    },
    {
    "id": '018',
    "name": 'Electric Caddis',
    "above": false,
    "legs": true,
    "legsJointed": false,
    "tail": false,
    "antennae": null,
    "wingsOut": null,
    "wingsDesc": null,
    "imitates": 'Caddis Freeform',
    "image": electric,
    "size": '14-22',
    "category": 'Midge'
    },
    {
    "id": '019',
    "name": 'Kryptonite Caddis',
    "above": false,
    "legs": true,
    "legsJointed": false,
    "tail": false,
    "antennae": true,
    "wingsOut": null,
    "wingsDesc": null,
    "imitates": 'Caddis Emerger',
    "image": kryptonite,
    "size": '14-20',
    "category": 'Midge'
    },
    {
    "id": '020',
    "name": 'Mercury Cased Caddis',
    "above": false,
    "legs": true,
    "legsJointed": false,
    "tail": false,
    "antennae": true,
    "wingsOut": null,
    "wingsDesc": null,
    "imitates": 'Caddis Cased',
    "image": mercCaddis,
    "size": '14-18',
    "category": 'Midge'
    },
    {
    "id": '021',
    "name": 'Elk Hair Caddis',
    "above": true,
    "legs": null,
    "legsJointed": null,
    "tail": null,
    "antennae": null,
    "wingsOut": null,
    "wingsDesc": 'tented',
    "imitates": 'Caddis Dry',
    "image": elkHair,
    "size": '14-20',
    "category": 'Midge'
    }
]

export default flies;