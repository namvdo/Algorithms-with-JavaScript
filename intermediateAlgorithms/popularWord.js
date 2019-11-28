function popularWord(x) {
    dict = {}
    m = 0
    ans = ''
    x.toLowerCase()
        .match(/[a-z]+/g)
        .map(w => {
            dict[w] = -~dict[w]
            if (m < dict[w] || m == dict[w] && (w.length < ans.length || (w.length == ans.length && w < ans)))
                m = dict[w],
                ans = w
        })
    return ans
}