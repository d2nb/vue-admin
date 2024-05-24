const storage = {
  set(key, val) {
    if (val === undefined) {
      return this.remove(key)
    }
    localStorage.setItem(key, serialize(val))
    return val
  },

  get(key, def) {
    const val = deserialize(localStorage.getItem(key))
    return val === undefined ? def : val
  },

  has(key) {
    return this.get(key) !== undefined
  },

  remove(key) {
    localStorage.removeItem(key)
  },

  clear() {
    localStorage.clear()
  }
}

function serialize(val) {
  return JSON.stringify(val)
}

function deserialize(val) {
  if (typeof val !== 'string') {
    return undefined
  }
  try {
    return JSON.parse(val)
  } catch (err) {
    return val || undefined
  }
}

export default storage
