maior_altura = 0
soma_altura_masc = 0
qtd_masc = 0
qtd_fem = 0

for x in range(1, 16):
    print(f"\nPessoa {x}:")
    altura = float(input("Digite a altura (em metros): "))
    genero = input("Digite o gênero (M/F): ").upper()

    if x == 1:  
        maior_altura = altura
    else:
        if altura > maior_altura:
            maior_altura = altura

    if genero == 'M':
        soma_altura_masc += altura
        qtd_masc += 1
    elif genero == 'F':
        qtd_fem += 1


media_altura_masc = soma_altura_masc / qtd_masc if qtd_masc > 0 else 0

print(f"\nMaior altura do grupo: {maior_altura:.2f} m")
print(f"Média de altura dos homens: {media_altura_masc:.2f} m")
print(f"Número de mulheres: {qtd_fem}")
