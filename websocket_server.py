# import asyncio
# import websockets

# async def hello():
#     uri = "wss://durak.vit.ooo/ws/"  # Замените на адрес вашего сервера WebSocket
#     async with websockets.connect(uri) as websocket:
#         await websocket.send("Привет, сервер WebSocket!")
#         response = await websocket.recv()
#         print(response)

# asyncio.run(hello())
import asyncio
import websockets

async def receive_data():
    async with websockets.connect('wss://durak.vit.ooo/ws/') as websocket:  # Замените 'ws://localhost:8765' на ваш адрес WebSocket сервера
        while True:
            data = await websocket.recv()
            print(data)  

asyncio.run(receive_data())