import {Game} from "./game";


describe('game tests', () => {
    it('first test', () => {
        const game = new Game()
        expect(game.test()).toBe('game')
    })
    it('init test', () => {
        const game = new Game()

        game.setSettings({
            gridSize: {
                columns: 4,
                rows: 5,
            },
        })

        const settings = game.getSettings()

        expect(settings.gridSize.columns).toBe(4)
        expect(settings.gridSize.rows).toBe(5)
    })
    it('start game', async () => {
        const game = new Game()
        game.setSettings({
            gridSize: {
                columns: 4,
                rows: 5,
            },
        })

        expect(game.status).toBe('pending')
        await game.start()
        expect(game.status).toBe('in-progress')
    })
    it('player1, player2 should have unique coordinates', async () => {
        for (let i = 0; i < 10; i++) {
            const game = new Game()
            game.setSettings({
                gridSize: {
                    columns: 2,
                    rows: 3,
                },
            })

            await game.start()


            expect([1, 2]).toContain(game.player1.position.columns)
            expect([1, 2, 3]).toContain(game.player1.position.rows)

            expect([1, 2]).toContain(game.player2.position.columns)
            expect([1, 2, 3]).toContain(game.player2.position.rows)

            expect(
                game.player1.position.columns !== game.player2.position.columns ||
                game.player1.position.rows !== game.player2.position.rows
            )
            expect([1, 2]).toContain(game.mouse.position.columns)
            expect([1, 2, 3]).toContain(game.mouse.position.rows)

            expect(
                (game.player1.position.columns !== game.player2.position.columns ||
                    game.player1.position.rows !== game.player2.position.rows) &&
                (game.player1.position.columns !== game.mouse.position.columns ||
                    game.player1.position.rows !== game.mouse.position.rows) &&
                (game.player2.position.columns !== game.mouse.position.columns ||
                    game.player2.position.rows !== game.mouse.position.rows)
            ).toBe(true)

        }
    })
})