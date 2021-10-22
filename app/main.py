import uvicorn
from fastapi import FastAPI
from config.database import create_table
from auth import authrouter
from users import usersrouter
from member import memberrouter
from outlet import outletrouter
from paket import paketrouter
from transaksi import transaksirouter
from starlette.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()


@app.on_event("startup")
async def coba():
    create_table()


origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.mount("/media", StaticFiles(directory="media"))


@app.get("/")
def hello():
    return "Hello"


app.include_router(authrouter.router)
app.include_router(usersrouter.router)
app.include_router(memberrouter.router)
app.include_router(outletrouter.router)
app.include_router(paketrouter.router)
app.include_router(transaksirouter.router)

if __name__ == "__main__":
    uvicorn.run("main:app", reload=True)
