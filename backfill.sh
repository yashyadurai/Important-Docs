#!/bin/bash

# Config
FOLDER="./"     # Change this to your folder path
BRANCH="main"              # Change if your branch is different

# Check if folder exists
if [ ! -d "$FOLDER" ]; then
    echo "Folder not found: $FOLDER"
    exit 1
fi

# Get all files in the folder
files=("$FOLDER"/*)

if [ ${#files[@]} -eq 0 ]; then
    echo "No files found in $FOLDER"
    exit 1
fi

# Date range
start_date="2026-01-23"
end_date="2026-03-06"

current_date="$start_date"
file_index=0
total_files=${#files[@]}

while [[ "$current_date" < "$end_date" || "$current_date" == "$end_date" ]]; do
    if [ $file_index -ge $total_files ]; then
        echo "Ran out of files at $current_date"
        break
    fi

    file="${files[$file_index]}"
    commit_datetime="${current_date} 12:00:00"

    git add "$file"

    GIT_AUTHOR_DATE="$commit_datetime" \
    GIT_COMMITTER_DATE="$commit_datetime" \
    git commit -m "Added $(basename $file)"

    echo "Committed $(basename $file) on $current_date"

    # Move to next day
    current_date=$(date -d "$current_date + 1 day" +%Y-%m-%d)
    file_index=$((file_index + 1))
done

# Push everything
git push origin "$BRANCH"
echo "All done! Pushed to $BRANCH."
