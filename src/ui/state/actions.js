export const toggleLoading = () => {
  return {
    type: 'TOGGLE_LOADING',
  };
}

export const setVoteStatus = (id, status) => {
  return {
    type: "SET_STATUS",
    id,
    status,
  };
}

export const addLeaf = (leaf) => {
  return {
    type: "ADD_LEAF",
    id: leaf.id,
    leaf: leaf,
  }
}

export const addFilter = (filter) => {
  return {
    type: "ADD_FILTER",
    filter,
  }
}

export const removeFilter = (filter) => {
  return {
    type: "REMOVE_FILTER",
    filter,
  }
}
