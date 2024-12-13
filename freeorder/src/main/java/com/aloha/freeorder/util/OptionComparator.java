package com.aloha.freeorder.util;

import java.util.List;
import com.aloha.freeorder.domain.CartOption;

public class OptionComparator {

    // 두 옵션 리스트가 동일한지 비교
    public static boolean areOptionListsEqual(List<CartOption> list1, List<CartOption> list2) {
        if (list1.size() != list2.size()) {
            return false; // 크기가 다르면 다른 옵션 세트
        }

        // 각 옵션의 ID를 기준으로 비교 (정렬이 다를 수 있으니 정렬 후 비교)
        return list1.stream()
                .map(CartOption::getOptionItemsId)
                .sorted()
                .toList()
                .equals(list2.stream()
                             .map(CartOption::getOptionItemsId)
                             .sorted()
                             .toList());
    }
}
