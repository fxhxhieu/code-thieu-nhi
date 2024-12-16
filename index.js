// Danh sách bài tập với kết quả đúng mong đợi
const exercises = [
    { id: 1, title: "Cộng hai số", description: "Nhập hai số và in ra tổng của chúng.", difficulty: "Dễ" },
    { id: 2, title: "Kiểm tra số chẵn", description: "Kiểm tra nếu số nhập vào là số chẵn.", difficulty: "Dễ" },
    { id: 3, title: "Tính diện tích hình chữ nhật", description: "Nhập chiều dài và chiều rộng, tính diện tích.", difficulty: "Trung bình" },
    { id: 4, title: "Tính chu vi hình tròn", description: "Nhập bán kính, tính chu vi hình tròn.", difficulty: "Trung bình" },
    { id: 5, title: "Fibonacci", description: "In ra dãy Fibonacci từ 1 đến 10.", difficulty: "Khó" },
    { id: 6, title: "Kiểm tra số nguyên tố", description: "Nhập một số và kiểm tra xem nó có phải là số nguyên tố không.", difficulty: "Trung bình" },
    { id: 7, title: "Tính tổng các số trong mảng", description: "Tính tổng các số trong mảng số nguyên.", difficulty: "Trung bình" },
    { id: 8, title: "In ra bảng cửu chương", description: "In ra bảng cửu chương của một số.", difficulty: "Dễ" },
    { id: 9, title: "Đảo ngược chuỗi", description: "Đảo ngược một chuỗi.", difficulty: "Dễ" },
    { id: 10, title: "Tính giai thừa", description: "Tính giai thừa của một số nguyên dương.", difficulty: "Trung bình" },
    { id: 11, title: "Sắp xếp mảng", description: "Sắp xếp một mảng các số theo thứ tự tăng dần.", difficulty: "Trung bình" },
    { id: 12, title: "Tính diện tích tam giác", description: "Tính diện tích tam giác từ chiều dài ba cạnh.", difficulty: "Khó" },
    { id: 13, title: "Kiểm tra chuỗi đối xứng", description: "Kiểm tra xem chuỗi nhập vào có phải là chuỗi đối xứng hay không.", difficulty: "Khó" },
    { id: 14, title: "Tạo số ngẫu nhiên trong phạm vi cho trước", description: "Tạo một số ngẫu nhiên trong phạm vi từ min đến max.", difficulty: "Dễ" },
    { id: 15, title: "Đếm số lần xuất hiện của một từ trong chuỗi", description: "Đếm số lần xuất hiện của từ trong chuỗi.", difficulty: "Dễ" },
    { id: 16, title: "Tính bình phương", description: "Tính bình phương của một số.", difficulty: "Dễ" },
    { id: 17, title: "Tính diện tích hình vuông", description: "Nhập chiều dài cạnh, tính diện tích hình vuông.", difficulty: "Dễ" },
    { id: 18, title: "Kiểm tra số chính phương", description: "Kiểm tra nếu một số là số chính phương.", difficulty: "Khó" },
    { id: 19, title: "Tìm giá trị lớn nhất trong mảng", description: "Tìm giá trị lớn nhất trong mảng.", difficulty: "Trung bình" },
    { id: 20, title: "Tính trung bình cộng của mảng", description: "Tính trung bình cộng của một mảng số.", difficulty: "Dễ" },
    { id: 21, title: "Chuyển đổi số thập phân sang nhị phân", description: "Chuyển đổi số thập phân sang hệ nhị phân.", difficulty: "Khó" },
    { id: 22, title: "Tạo chuỗi ngẫu nhiên", description: "Tạo ra một chuỗi ngẫu nhiên gồm các ký tự.", difficulty: "Trung bình" },
    { id: 23, title: "Tính diện tích hình tròn", description: "Tính diện tích hình tròn từ bán kính.", difficulty: "Dễ" },
    { id: 24, title: "Tính chu vi hình chữ nhật", description: "Tính chu vi hình chữ nhật từ chiều dài và chiều rộng.", difficulty: "Dễ" },
    { id: 25, title: "Tính độ dài chuỗi", description: "Nhập một chuỗi và tính độ dài của nó.", difficulty: "Dễ" },
    { id: 26, title: "Tính số lần xuất hiện của ký tự trong chuỗi", description: "Đếm số lần xuất hiện của một ký tự trong chuỗi.", difficulty: "Dễ" },
    { id: 27, title: "Tính lũy thừa", description: "Tính lũy thừa của một số.", difficulty: "Trung bình" },
    { id: 28, title: "Sắp xếp mảng theo thứ tự giảm dần", description: "Sắp xếp mảng theo thứ tự giảm dần.", difficulty: "Trung bình" },
    { id: 29, title: "Tạo mảng số nguyên tố", description: "Tạo một mảng chứa các số nguyên tố.", difficulty: "Khó" },
    { id: 30, title: "Tính tổng các số chẵn", description: "Tính tổng các số chẵn trong mảng.", difficulty: "Dễ" },
    { id: 31, title: "Tính tổng các số lẻ", description: "Tính tổng các số lẻ trong mảng.", difficulty: "Dễ" },
    { id: 32, title: "Nhập chuỗi và kiểm tra chữ cái đầu tiên", description: "Kiểm tra xem chữ cái đầu tiên của chuỗi là chữ hoa hay chữ thường.", difficulty: "Dễ" },
    { id: 33, title: "Tính tổng các chữ số trong một số", description: "Tính tổng các chữ số của một số nguyên.", difficulty: "Trung bình" },
    { id: 34, title: "Chuyển chuỗi thành mảng", description: "Chuyển chuỗi thành mảng các ký tự.", difficulty: "Dễ" },
    { id: 35, title: "Tìm phần tử nhỏ nhất trong mảng", description: "Tìm phần tử nhỏ nhất trong mảng số nguyên.", difficulty: "Dễ" },
    { id: 36, title: "Tính giá trị tuyệt đối", description: "Tính giá trị tuyệt đối của một số.", difficulty: "Dễ" },
    { id: 37, title: "Tính số ngày trong tháng", description: "Nhập tháng và năm, tính số ngày trong tháng đó.", difficulty: "Khó" },
    { id: 38, title: "Tạo một mảng vuông", description: "Tạo một mảng vuông có kích thước `n x n`.", difficulty: "Trung bình" },
    { id: 39, title: "Tạo mảng Fibonacci", description: "Tạo mảng chứa dãy Fibonacci.", difficulty: "Khó" },
    { id: 40, title: "Kiểm tra số Armstrong", description: "Kiểm tra số Armstrong là gì.", difficulty: "Khó" },
    // Các bài tập tiếp theo tiếp tục thêm vào đây...
];

// Tiếp tục thêm các bài tập từ 41 đến 100 theo cùng cách.

  
  // Hiển thị danh sách bài tập
  const exerciseList = document.getElementById('exercise-list');
  
  // Tạo thẻ HTML cho mỗi bài tập
  exercises.forEach(exercise => {
    const card = document.createElement('div');
    card.className = 'col-md-4';
    card.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${exercise.title}</h5>
          <p class="card-text">${exercise.description}</p>
          <p><strong>Độ khó:</strong> ${exercise.difficulty}</p>
          <button class="btn btn-custom" onclick="startExercise(${exercise.id})">Làm bài</button>
        </div>
      </div>
    `;
    exerciseList.appendChild(card);
  });
  
  // Chức năng khi nhấn nút "Làm bài"
  function startExercise(id) {
    const exercise = exercises.find(e => e.id === id);
    document.body.innerHTML = `
      <div class="container">
        <h1>${exercise.title}</h1>
        <p>${exercise.description}</p>
        <textarea id="editor" class="form-control" rows="10" placeholder="Nhập code của bạn ở đây"></textarea>
        <button id="run-code" class="btn btn-success mt-3">Chạy Code</button>
        <pre id="output" class="mt-3 bg-light p-3"></pre>
        <button class="btn btn-secondary mt-3" onclick="location.reload()">Quay lại danh sách</button>
      </div>
    `;
  
    // Đảm bảo phần tử output đã được tạo ra
    const outputElement = document.getElementById('output');
    const runCodeButton = document.getElementById('run-code');
    
    if (outputElement && runCodeButton) {
      // Chạy code và kiểm tra kết quả
      runCodeButton.addEventListener('click', () => {
        const code = document.getElementById('editor').value;
        
        try {
          const result = eval(code); // Dùng eval để chạy code người dùng nhập vào
          
          let resultMessage = '';
          if (JSON.stringify(result) === JSON.stringify(exercise.correctResult)) {
            resultMessage = 'Bạn đã làm đúng! 🎉';
          } else {
            resultMessage = 'Kết quả không đúng. 😢';
          }
  
          // Hiển thị kết quả trong phần tử 'output'
          outputElement.innerText = `${resultMessage}\nKết quả trả về: ${result}`;
  
        } catch (e) {
          outputElement.innerText = `Lỗi: ${e.message}`;
        }
      });
    } else {
      console.error("Không tìm thấy phần tử 'output' hoặc 'run-code' trên trang.");
    }
  }
  