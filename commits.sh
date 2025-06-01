data="2024-06-01"

for i in {1..10}; do
    echo "Linha do commit $i em $data" >> log.txt
    git add log.txt
    GIT_AUTHOR_DATE="$data 10:00:00" GIT_COMMITTER_DATE="$data 10:00:00" git commit -m "primeiro commit"
    data=$(date -I -d "$data + 1 day")
done

echo "Todos os commits criados com sucesso!"
