// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`32001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000001000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001107060500000000000000000000000000000000100000000000110609000000000000000000000f000001020300000000010202000000000000000000000000000000000000000000000000060506000000000000000b080c0b00000000000000000000000000000000000000000000000000000000110b0a06000500000000000002000000100008000000000000000000040506000000000000000011000000000000000000000205000000000000000000000000000000000000000000000000000000000000000000000000030805000000100000000006000000000000000000000000000002010208000000000000000000000000000000000000000000000000000000000011000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600060900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d`, img`
..................................................
..................................................
..................................................
..................................................
..................................................
..........222.......................22............
.222....222........................222.......2222.
............................222.2......2.....2....
.....222...................22.....................
...............222........2..............2222.....
..................................................
.....................2.22.........................
..................................................
..................................................
..................................................
..................................................
`, [myTiles.transparency16,sprites.dungeon.floorLight1,sprites.dungeon.floorLight0,sprites.dungeon.floorLightMoss,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorMixed,sprites.dungeon.floorLight5,sprites.dungeon.floorLight2,sprites.dungeon.floorDark0,sprites.dungeon.floorLight4,sprites.dungeon.floorDark5,sprites.dungeon.floorDark1,sprites.dungeon.floorDark3,sprites.dungeon.hazardLava0,sprites.dungeon.hazardLava1,sprites.dungeon.collectibleInsignia,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
