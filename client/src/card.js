export const renderCard = (videoRequest) => {
    return `
        <div class="card mb-3">
            <div class="card-body d-flex justify-content-between flex-row">
            <div class="d-flex flex-column">
                <h3>${videoRequest.topic_title}</h3>
                <p class="text-muted mb-2">${videoRequest.topic_details}</p>
                <p class="mb-0 text-muted">
                <strong>Expected results:</strong> ${videoRequest.expected_result}
                </p>
            </div>
            <div class="d-flex flex-column text-center">
                <a class="btn btn-link">🔺</a>
                <h3>${videoRequest.votes.ups - videoRequest.votes.downs}</h3>
                <a class="btn btn-link">🔻</a>
            </div>
            </div>
            <div class="card-footer d-flex flex-row justify-content-between">
            <div>
                <span class="text-info">NEW</span>
                &bullet; added by <strong>${videoRequest.author_name}</strong> on
                <strong>Sat Apr 11 2020</strong>
            </div>
            <div class="d-flex justify-content-center flex-column 408ml-auto mr-2">
                <div class="badge badge-success">
                Beginners
                </div>
            </div>
            </div>
        </div>
    `
} 