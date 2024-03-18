#!/usr/bin/env python3

import asyncio
import random

async def wait_random(max_delay = 10):
    x = random.random() * max_delay
    await asyncio.sleep(x)
    return x
