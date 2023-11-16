# Run this file using streamlit run load.py (from this directory)
# Install streamlit (https://streamlit.io) with pip install streamlit
import glob
import json
import pathlib
import io
import streamlit as st
from collections import abc



# Get the folder name for this file
current_folder = pathlib.Path(__file__).parent.absolute()

def load(fname):
    with io.open(fname, 'r', encoding='utf-8-sig') as json_file:
        return json.load(json_file)

def filter_collection(d, level, filter_level, show_keys=False):
    if isinstance(d, abc.Mapping):
        if level < filter_level:
            return {key: filter_collection(val, level+1, filter_level, show_keys) for key,val in d.items()}
        else:
            if show_keys:
                return list(d.keys())
            else:
                return f"{len(d)} item object"
    if isinstance(d, list):
        if level < filter_level:
            return [filter_collection(x, level+1, filter_level, show_keys) for x in d]
        else:
            if show_keys:
                return [filter_collection(x, level+1, filter_level, show_keys) for x in d]
            else:
                return f"{len(d)} value array"
    else:
        return d


st.title("New format for self-hosted JavaScript virtual labs")


# Use pathlib to get all folders that contain json files (the folders could be several levels deep)
# Just return the folder, not the files
folders = sorted(set(x.parent for x in pathlib.Path(current_folder).glob("**/*.json"))) # Unique folders

st.write(f"Choosing among {len(folders)} folders")


folder = st.selectbox("Folder:", folders)

files = [pathlib.Path(x) for x in folder.glob('*.json')]

json_representation = {fname.parts[-1].replace(".json", ""): load(fname) for fname in files}



display = st.radio("Display settings:", options=["All", "Next level keys", "Next level sizes"])

if display != "All":
    levels_to_display = st.number_input("Levels to display: ", 1)


if display == "All":
    json_display = json_representation
elif display == 'Next level keys':
    json_display = filter_collection(json_representation, 0, levels_to_display, True)
elif display == "Next level sizes":
    json_display = filter_collection(json_representation, 0, levels_to_display, False)

st.json(json_display)