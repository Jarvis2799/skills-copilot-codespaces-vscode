function members() {
  return {
    // Path: member.js
    getMembers: function() {
      return $http.get('/api/members');
    },
    // Path: member.js
    createMember: function(memberData) {
      return $http.post('/api/members', memberData);
    },
    // Path: member.js
    deleteMember: function(id) {
      return $http.delete('/api/members/' + id);
    },
    // Path: member.js
    updateMember: function(id, memberData) {
      return $http.put('/api/members/' + id, memberData);
    }
  };
}