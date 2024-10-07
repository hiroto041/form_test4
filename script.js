// モーダルを表示
window.onload = function() {
    const modal = document.getElementById('modal');
    modal.classList.add('show');  // モーダルをフェードインで表示
    pushHistoryState();  // 履歴に初期状態を追加
};

// モーダルを閉じてSTEP1に移行
function selectIntent(intent) {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');  // モーダルをフェードアウト
    setTimeout(() => {
        modal.style.display = 'none';  // フェードアウト後にモーダルを完全に非表示
        showStep(0);  // STEP1を表示
    }, 500);  // 500msでフェードアウトアニメーションが完了
}


// 戻るボタン用モーダルの表示
window.onpopstate = function(event) {
    const backModal = document.getElementById('backModal');
    backModal.classList.add('show');  // 「質問回答に戻る」モーダルを表示
};

// 質問回答に戻るボタンが押されたときにSTEP1に戻る処理
function returnToStep1() {
    const backModal = document.getElementById('backModal');
    backModal.classList.remove('show');  // モーダルを閉じる
    showStep(0);  // STEP1に戻る
}

// ステップ表示を制御する関数
let currentStep = 0;
function showStep(stepIndex) {
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, index) => {
        if (index === stepIndex) {
            step.style.display = 'block';  // アクティブなステップを表示
        } else {
            step.style.display = 'none';  // 非アクティブなステップを非表示
        }
    });
    updateProgressBar(stepIndex);
    currentStep = stepIndex;  // 現在のステップを更新
}

// 次のステップに進む
function nextStep() {
    const steps = document.querySelectorAll('.step');
    if (currentStep < steps.length - 1) {
        showStep(currentStep + 1);  // 次のステップを表示
    }
}

// 前のステップに戻る
function prevStep() {
    if (currentStep > 0) {
        showStep(currentStep - 1);  // 前のステップを表示
    }
}

// 選択肢が選ばれたときに次のステップに進む
function selectOption(option) {
    console.log(option + "が選ばれました");  // デバッグ用のログ
    nextStep();  // 自動で次のステップへ進む
}

// プログレスバーを更新する関数
function updateProgressBar(stepIndex) {
    const progressItems = document.querySelectorAll('.progress-bar li');
    progressItems.forEach((item, index) => {
        item.classList.toggle('active', index <= stepIndex);
    });
}


// ブラウザの履歴に状態を追加
function pushHistoryState() {
    history.pushState(null, null, window.location.pathname);  // 履歴に状態を追加
}


