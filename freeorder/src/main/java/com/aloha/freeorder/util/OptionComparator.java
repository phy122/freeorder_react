package com.aloha.freeorder.util;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import com.aloha.freeorder.domain.CartOption;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class OptionComparator {

    // 두 옵션 리스트가 동일한지 비교
    public static boolean areOptionListsEqual(List<CartOption> list1, List<CartOption> list2) {
        // log.info("list1 :" + list1);
        // log.info("list2 :" + list2);

        log.info("A###################################");
        if (list1.size() != list2.size()) {
            return false; // 크기가 다르면 다른 옵션 세트
        }
        log.info("B###################################");

        List<String> optionItemIdList1 = new ArrayList<>();
        for (CartOption cartOption : list1) {
            String id1 = cartOption.getOptionItemsId();
            if( id1  == null  ) return false;
            optionItemIdList1.add( id1 );
        }
        Collections.sort(optionItemIdList1);
        
        
        List<String> optionItemIdList2 = new ArrayList<>();
        for (CartOption cartOption : list2) {
            String id2 = cartOption.getOptionItemsId();
            if( id2  == null  ) return false;
            optionItemIdList2.add( id2 );
        }
        Collections.sort(optionItemIdList2);

        for (int i = 0; i < optionItemIdList1.size(); i++) {
            String id1 = optionItemIdList1.get(i);
            String id2 = optionItemIdList2.get(i);
            if( !id1.equals(id2) ) return false;
        }

        // 각 옵션의 ID를 기준으로 비교 (정렬이 다를 수 있으니 정렬 후 비교)
        return true;
    }
}
