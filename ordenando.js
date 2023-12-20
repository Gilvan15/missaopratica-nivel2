//funcoes privadas
const swap = (vetor, posicao1, posicao2) => {
    if (posicao1 < 0 || posicao1 >= vetor.length || posicao2 < 0 || posicao2 >= vetor.length) {
        console.error('Posições inválidas.');
        return vetor;
    }
    const temp = vetor[posicao1];
    vetor[posicao1] = vetor[posicao2];
    vetor[posicao2] = temp;
    return vetor;
}

//funcoes privadas
const partition = (vector, left_pos, right_pos) => {
    let pivot = vector[Math.floor((right_pos + left_pos) / 2)];
    let l = left_pos;
    let r = right_pos;

    while (l <= r) {
        while (vector[l] < pivot) {
            l++;
        }
        while (vector[r] > pivot) {
            r--;
        }
        if (l <= r) {
            swap(vector, l, r);
            l++;
            r--;
        }
    }
    return l;
}


const shuffle = (vector, quantity_shuffle) => {
    let vector_new = [];
    while (quantity_shuffle > 0) {
        let index_random = Math.floor(Math.random() * vector.length);
        vector_new.push(vector[index_random]);
        vector.splice(index_random, 1);
        quantity_shuffle--;
        if (vector.length == 0 && quantity_shuffle > 0) {
            vector = vector_new;
            vector_new = [];
        };
    };

    if (vector.length > 0) {
        vector_new = vector_new.concat(vector);
    };
    return vector_new;
    alert('Shuffle');
};

const bubble_sort = (vector) => {
    for (var i = 0; i < vector.length; i++) {

        for (var j = 0; j < (vector.length - i - 1); j++) {
            if (vector[j] > vector[j + 1]) {
                vector = swap(vector, j, j + 1);
            }
        }
    }
    return vector;
    alert("Blubble Sort")
};


const selection_sort = (vector) => {
    let n = vector.length;

    for (let i = 0; i < n; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (vector[j] < vector[min]) {
                min = j;
            }
        }
        if (min != i) {
            vector = swap(vector, i, min);
        }
    }
    return vector;
    alert('Selection_sort');
};

const quick_sort = (vector, left_pos, right_pos) => {
    let index;
    if (vector.length > 1) {
        index = partition(vector, left_pos, right_pos);
        if (left_pos < index - 1) {
            quick_sort(vector, left_pos, index - 1);
        }
        if (index < right_pos) {
            quick_sort(vector, index, right_pos);
        }
    }
    return vector;
    alert('Quick_sort');
}
  